gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects2= [];
gdjs.Untitled_32sceneCode.GDBarryCherryObjects1= [];
gdjs.Untitled_32sceneCode.GDBarryCherryObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDEatButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDEatButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDCleanButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDCleanButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDPlatform3Objects1= [];
gdjs.Untitled_32sceneCode.GDPlatform3Objects2= [];
gdjs.Untitled_32sceneCode.GDFlatHeartBarObjects1= [];
gdjs.Untitled_32sceneCode.GDFlatHeartBarObjects2= [];
gdjs.Untitled_32sceneCode.GDAppleObjects1= [];
gdjs.Untitled_32sceneCode.GDAppleObjects2= [];
gdjs.Untitled_32sceneCode.GDPoopObjects1= [];
gdjs.Untitled_32sceneCode.GDPoopObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Untitled_32sceneCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarryCherry"), gdjs.Untitled_32sceneCode.GDBarryCherryObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBarryCherryObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBarryCherryObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EatButton"), gdjs.Untitled_32sceneCode.GDEatButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEatButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEatButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEatButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDEatButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEatButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarryCherry"), gdjs.Untitled_32sceneCode.GDBarryCherryObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.Untitled_32sceneCode.GDFlatHeartBarObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.Untitled_32sceneCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (+(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBarryCherryObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBarryCherryObjects1[i].getBehavior("Animation").setAnimationName("IdleBlink");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBarryCherryObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBarryCherryObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSkyBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBarryCherryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBarryCherryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEatButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEatButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCleanButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCleanButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatform3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatHeartBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatHeartBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAppleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPoopObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPoopObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
