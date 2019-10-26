import { CommentPage } from '../comment/comment.page';
import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from '../../header.directive';
import { ModalController } from '@ionic/angular';
import { myEnterAnimation } from 'src/app/modelAnimation/customModalEnter';
import { myLeaveAnimation } from 'src/app/modelAnimation/customModalLeave';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 60 };

  timelineData: any;


  constructor(
    private model: ModalController
  ) {
    this.timelineData = [
      {
        name: "Abubakar pagas",
        about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",
        image: "../../assets/chat/pagas.jpg",
        time: "12:00",
        imagePost: "../../assets/images/1.jpg",
        post: "Hello dude have seen this great UI Elemnt  ",
        like: 3,
        comment: 0
      },
      {
        name: "Logan abs",
        about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",
        image: "../../assets/chat/chat2.jpg",
        time: "12:03",
        imagePost: "../../assets/images/2.jpg",
        post: "Yeah, I see pagas this. This looks great. ",
        like: 1,
        comment: 2
      },
      {
        name: "Herrisokn",
        about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",
        image: "../../assets/chat/chat3.jpg",
        imagePost: "../../assets/images/3.jpg",
        time: "12:03",
        post: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",
        like: 7,
        comment: 5
      },
      {
        name: "Sebastian",
        about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",
        image: "../../assets/chat/chat4.jpg",
        imagePost: "../../assets/images/4.jpg",
        time: "12:03",
        post: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente! ",
        like: 22,
        comment: 5
      },
      {
        name: "harry mathew",
        about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",
        image: "../../assets/chat/chat5.jpg",
        imagePost: "../../assets/images/5.jpg",
        time: "12:03",
        post: "Looking Great UI feauture in ionic 3,4 apps .",
        like: 13,
        comment: 5
      }
    ];

  }

  ngOnInit() {

  }

  async getcomment(item) {
    const model = await this.model.create({
      component: CommentPage,
      leaveAnimation: myLeaveAnimation,
      enterAnimation: myEnterAnimation,
      componentProps: {
        item: item
      }
    });
    model.present();

  }

}
