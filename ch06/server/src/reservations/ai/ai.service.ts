import { Injectable } from '@nestjs/common';
import { Genkit, genkit, ToolAction, z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import {
  ReservationsService
} from '../reservations.service';

@Injectable()
export class AiService {
  private ai: Genkit;
  private tool: ToolAction;

  constructor(
    private reservationsService: ReservationsService
  ) {
    this.ai = genkit({
      plugins: [googleAI()],
      model: googleAI.model('gemini-2.5-flash')
    });

    this.tool = this.ai.defineTool({
      name: 'createReservation',
      description: 'Creates a new reservation',
      inputSchema: z.object({
        name: z.string(),
        email: z.string(),
        start: z.string(),
        room: z.number()
      }),
      outputSchema: z.string()
    }, async input => {
      const rooms = await this.reservationsService.findRooms(
        input.start
      );
      if (!rooms.includes(input.room)) {
        return `Room ${input.room} is unavailable`;
      }
      
      const res = await this.reservationsService.create(input); 
      return res.message;
    });
  }

  async ask(prompt: string) {
    const response = await this.ai.generate({
      prompt,
      tools: [this.tool]
    });
    return { message: response.text };
  }
}
