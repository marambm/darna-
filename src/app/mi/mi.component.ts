import { Component } from '@angular/core';

@Component({
  selector: 'app-mi',
  templateUrl: './mi.component.html',
  styleUrls: ['./mi.component.css']
})
export class MiComponent {
  messages = [
    { sender: 'agent', text: 'Bonjour ! Comment puis-je vous aider ?' }
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'user', text: this.newMessage });
      this.newMessage = '';
    }
  }
}
