import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  allList: any = [];

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) { }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj => {
      this.allList.push(newTaskObj.data)
      //console.log(newTaskObj.data);
    })

    var mdatos = JSON.stringify(this.allList);
    localStorage.setItem("MyList", mdatos)
    console.log(mdatos)

    return await modal.present()
  }

  delete(index: any) {
    if (confirm("¿Seguro que quieres eliminar esta tarea?")) this.allList.splice(index, 1)
  }

  complete(tpm: any) {
    if (confirm("¿Ya has completado esta tarea?")) {
      this.allList.splice(tpm, 1)
    }
  }

  cargar() {
    var dtp = localStorage.getItem("MyList");
    if (dtp != null) {
      this.allList = JSON.parse(dtp)

    }
    console.log({dtp})
  }





}
