import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartest';
  @ViewChild(ChildComponent) viewdata !: ChildComponent;
  constructor(private service:MasterService){
    sessionStorage.setItem('name','Nihira Techiees')!;
  }
  inputname = '';
  inputmark = '';
  inputobj = {"name":"","mark":""};
  response:any
  TransferData(name: any,mark:any) {
    this.inputname = name;
    this.inputmark=mark;
    this.inputobj={"name":name,"mark":mark};
  // this.response= this.viewdata.updateList(this.inputobj);
  this.service.SaveData(this.inputobj);
  }
  updatetitle(title:any){
    this.title=title;
  }
}
