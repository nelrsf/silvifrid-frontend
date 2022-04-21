import { Component, OnInit } from '@angular/core';
import { AssetControllerService } from 'src/app/Controller/Services/asset-controller.service';
import { Asset } from 'src/app/Model/Asset';

@Component({
  selector: 'app-video-ribbon',
  templateUrl: './video-ribbon.component.html',
  styleUrls: ['./video-ribbon.component.css']
})
export class VideoRibbonComponent implements OnInit {

  assets!: Asset[];

  constructor(private assetControllerService: AssetControllerService) { }

  ngOnInit(): void {
    this.assetControllerService.getAllAssets().subscribe(data=>{
      var ObjStr =JSON.stringify(data);
      var ObjJson = JSON.parse(ObjStr);
      this.assets = ObjJson;
    })
  }

}
