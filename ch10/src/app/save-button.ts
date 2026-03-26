import { NgxWigComponent } from 'ngx-wig';

export const save = {
  title: 'Save',
  styleClass: 'nw-button',
  icon: 'icon-save',
  command: async (editor: NgxWigComponent) => {
    const picker = await editor['window'].showSaveFilePicker();
    const stream = await picker.createWritable();
    await stream.write(editor.content());
    await stream.close();
  }
};
