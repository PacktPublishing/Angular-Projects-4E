import { NgxWigComponent } from 'ngx-wig';

export const brief = {
  title: 'Summarize',
  styleClass: 'nw-button',
  icon: 'icon-ai',
  command: async (editor: NgxWigComponent) => {
    const original = editor.content();
    const briefer = await editor['window'].Summarizer.create({
      monitor: (m: any) => {
        m.addEventListener('downloadprogress', (e: any) => {
          const progress = Math.floor(e.loaded * 100);
          editor.writeValue(`
            Thinking...${progress}%<hr>${original}`
          );
        });
      }
    });
    const brief = await briefer.summarize(editor.content());
    editor.writeValue(brief + '<hr>' + original);
  }
};
