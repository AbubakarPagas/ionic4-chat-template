import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notificationData: any
  constructor() { }

  ngOnInit() {
    this.notificationData = [

      {
        "name": "Jake Beauliu",
        "comment": "added a new photo",
        "time": "2:00 am",
        "image": "../../assets/chat/user.jpeg",
      }, {
        "name": "Abubakar pagas",
        "comment": "also commented on your post",
        "time": "2:00 am",
        "image": "../../assets/chat/user1.jpeg",
      },
      {
        "name": "Lisa Tsjin",
        "comment": "and 10 others have birthday todays. Wish them the best!",
        "time": "2:00 am",
        "image": "../../assets/chat/user3.jpeg",
      },
      {
        "name": "Genalyn Arcojetas",
        "comment": "also commented on your post",
        "time": "2:00 am",
        "image": "../../assets/chat/user2.jpeg",
      },
      {
        "name": "Rehman Sazid",
        "comment": "also commented on your post",
        "time": "2:00 am",
        "image": "../../assets/chat/user4.jpeg",
      },


    ]
  }

}
