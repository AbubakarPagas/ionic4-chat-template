import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  segmentTab: any;
  chatData: ({ "name": string; "image": string; "description": string; "count": string; "status": string; "time": string; } | { "name": string; "status": string; "image": string; "description": string; "time": string; "count"?: undefined; })[];

  constructor(public route: Router) {
    this.chatData = [{
      "name": 'Jovenica Alba',
      "image": '../../assets/chat/chat1.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '2',
      "time": '12:17',
      "status": "ofline"
    }, {
      "name": 'Oliver',
      "image": ' ../../assets/chat/chat2.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": '12:17',
      "status": "online"
    }, {
      "name": 'George',
      "image": ' ../../assets/chat/chat3.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '2',
      "time": 'Yesterday',
      "status": "online"
    }, {
      "name": 'Harry',
      "image": ' ../../assets/chat/chat4.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Sunday',
      "status": "ofline"
    }, {
      "name": 'Jack',
      "image": ' ../../assets/chat/chat5.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "status": "online",
      "time": '11:15'
    }, {
      "name": 'Jacob',
      "image": ' ../../assets/chat/chat6.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '1',
      "status": "online",
      "time": 'Yesterday'
    }, {
      "name": 'Noah',
      "image": ' ../../assets/chat/chat7.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Monday',
      "status": "ofline",
    }, {
      "name": 'Charlie',
      "image": ' ../../assets/chat/chat8.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '6',
      "status": "ofline",
      "time": '07:00'
    }, {
      "name": 'Logan',
      "image": ' ../../assets/chat/chat1.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Yesterday',
      "status": "online"
    }, {
      "name": 'Harrison',
      "image": ' ../../assets/chat/chat2.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "status": "online",
      "time": 'Yesterday'
    }, {
      "name": 'Sebastian',
      "image": ' ../../assets/chat/chat3.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "status": "ofline",
      "time": 'Yesterday'
    }, {
      "name": 'Zachary',
      "image": ' ../../assets/chat/chat4.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Today',
      "status": "ofline"
    }, {
      "name": 'Elijah',
      "image": ' ../../assets/chat/chat5.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": '18:25',
      "status": "ofline"
    }
    ]
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
  goforChat(chat) {
    this.route.navigate(['chat', chat]);

  }


}

