import { NgxWigComponent } from 'ngx-wig';

export const load = {
  title: 'Open',
  styleClass: 'nw-button',
  icon: 'icon-open',
  command: async (editor: NgxWigComponent) => {
    const [fileHandle] = await editor['window'].showOpenFilePicker();
    const file: File = await fileHandle.getFile();
    editor.writeValue(await file.text());
    editor.ngxWigEditable().nativeElement.focus();
  }
};
