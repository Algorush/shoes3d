import { proxy} from "valtio";

export const state = proxy({
  assetsPath: "./",
  links:{},
  materials:{prog:0,loaded:false,startedLoading:false},
  materialSet:{"hi":1},
  boxOpen:false,
  modelReady:false,
  firstRender:true,
  replayAnim:false,
  startTimeout:0,
  scrollProgress:0
});
