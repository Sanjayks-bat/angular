import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {
  public showFbNotification():string[]{
    return ["New Friend Request","New friend added"]
  }
  public showTweets():string[]{
    return ["When life gives you a question, search it 🔍🍋..", "Reminder to grant your passwords the p0w€R of $upe₹ sTr€ngth 💪💪💪 by using a mixed bag of upper and lower case letters, numbers and special characters!" ]
  }
  constructor() { }
}
