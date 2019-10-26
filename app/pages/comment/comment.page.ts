import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  @ViewChild('IonContent', { static: true }) content: IonContent


  item
  commentList
  comment
  username: string = "Abubakar pagas"
  commentText: any
  constructor(
    private modal: ModalController
  ) {
    this.commentList = []
  }

  ngOnInit() {
  }

  postComment() {
    this.commentList.push({
      time: "7:00",
      comment: this.comment,
      username: this.username,
      avatar: "assets/chat/pagas.jpg"
    })
    this.comment = ''
    this.scrollDown()
  }

  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 50);
  }
  dismiss() {
    this.modal.dismiss()
  }

}
