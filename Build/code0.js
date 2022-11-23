gdjs.mainCode = {};
gdjs.mainCode.GDCarObjects1= [];
gdjs.mainCode.GDCarObjects2= [];
gdjs.mainCode.GDCarObjects3= [];
gdjs.mainCode.GDMuscle_95carObjects1= [];
gdjs.mainCode.GDMuscle_95carObjects2= [];
gdjs.mainCode.GDMuscle_95carObjects3= [];
gdjs.mainCode.GDTaxiObjects1= [];
gdjs.mainCode.GDTaxiObjects2= [];
gdjs.mainCode.GDTaxiObjects3= [];
gdjs.mainCode.GDMini_95truckObjects1= [];
gdjs.mainCode.GDMini_95truckObjects2= [];
gdjs.mainCode.GDMini_95truckObjects3= [];
gdjs.mainCode.GDTruckObjects1= [];
gdjs.mainCode.GDTruckObjects2= [];
gdjs.mainCode.GDTruckObjects3= [];
gdjs.mainCode.GDBackgroundObjects1= [];
gdjs.mainCode.GDBackgroundObjects2= [];
gdjs.mainCode.GDBackgroundObjects3= [];
gdjs.mainCode.GDScoreObjects1= [];
gdjs.mainCode.GDScoreObjects2= [];
gdjs.mainCode.GDScoreObjects3= [];
gdjs.mainCode.GDGame_95overObjects1= [];
gdjs.mainCode.GDGame_95overObjects2= [];
gdjs.mainCode.GDGame_95overObjects3= [];
gdjs.mainCode.GDGame_95over_95fundoObjects1= [];
gdjs.mainCode.GDGame_95over_95fundoObjects2= [];
gdjs.mainCode.GDGame_95over_95fundoObjects3= [];

gdjs.mainCode.conditionTrue_0 = {val:false};
gdjs.mainCode.condition0IsTrue_0 = {val:false};
gdjs.mainCode.condition1IsTrue_0 = {val:false};
gdjs.mainCode.condition2IsTrue_0 = {val:false};
gdjs.mainCode.condition3IsTrue_0 = {val:false};
gdjs.mainCode.conditionTrue_1 = {val:false};
gdjs.mainCode.condition0IsTrue_1 = {val:false};
gdjs.mainCode.condition1IsTrue_1 = {val:false};
gdjs.mainCode.condition2IsTrue_1 = {val:false};
gdjs.mainCode.condition3IsTrue_1 = {val:false};


gdjs.mainCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.mainCode.GDCarObjects2);
{for(var i = 0, len = gdjs.mainCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDCarObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.mainCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDCarObjects2[i].rotateTowardAngle(-(30), 60, runtimeScene);
}
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.mainCode.GDCarObjects2);
{for(var i = 0, len = gdjs.mainCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDCarObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.mainCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDCarObjects2[i].rotateTowardAngle(30, 60, runtimeScene);
}
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
gdjs.mainCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.mainCode.GDCarObjects1);
{for(var i = 0, len = gdjs.mainCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDCarObjects1[i].rotateTowardAngle(0, 100, runtimeScene);
}
}}

}


};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.mainCode.GDCarObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDMuscle_9595carObjects1ObjectsGDgdjs_46mainCode_46GDTaxiObjects1ObjectsGDgdjs_46mainCode_46GDMini_9595truckObjects1ObjectsGDgdjs_46mainCode_46GDTruckObjects1Objects = Hashtable.newFrom({"Muscle_car": gdjs.mainCode.GDMuscle_95carObjects1, "Taxi": gdjs.mainCode.GDTaxiObjects1, "Mini_truck": gdjs.mainCode.GDMini_95truckObjects1, "Truck": gdjs.mainCode.GDTruckObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDMuscle_9595carObjects2Objects = Hashtable.newFrom({"Muscle_car": gdjs.mainCode.GDMuscle_95carObjects2});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDTaxiObjects2Objects = Hashtable.newFrom({"Taxi": gdjs.mainCode.GDTaxiObjects2});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDMini_9595truckObjects2Objects = Hashtable.newFrom({"Mini_truck": gdjs.mainCode.GDMini_95truckObjects2});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDTruckObjects1Objects = Hashtable.newFrom({"Truck": gdjs.mainCode.GDTruckObjects1});
gdjs.mainCode.eventsList1 = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDMuscle_95carObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDMuscle_9595carObjects2Objects, gdjs.randomWithStep(235, 380, 145), -(200), "Vehicle");
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDTaxiObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDTaxiObjects2Objects, gdjs.randomWithStep(235, 380, 145), -(200), "Vehicle");
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDMini_95truckObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDMini_9595truckObjects2Objects, gdjs.randomWithStep(380, 545, 165), -(200), "Vehicle");
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.mainCode.GDTruckObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDTruckObjects1Objects, 680, -(200), "Vehicle");
}}

}


};gdjs.mainCode.eventsList2 = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TrafficTimer") >= gdjs.randomInRange(2.5, 4);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 4));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrafficTimer");
}
{ //Subevents
gdjs.mainCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.mainCode.eventsList3 = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Game_over"), gdjs.mainCode.GDGame_95overObjects1);
gdjs.copyArray(runtimeScene.getObjects("Game_over_fundo"), gdjs.mainCode.GDGame_95over_95fundoObjects1);
{for(var i = 0, len = gdjs.mainCode.GDGame_95overObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDGame_95overObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDGame_95over_95fundoObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDGame_95over_95fundoObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{



}


{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.mainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.mainCode.GDCarObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDCarObjects1[i].getX() <= 210 ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDCarObjects1[k] = gdjs.mainCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDCarObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDCarObjects1[i].addForce(200, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.mainCode.GDCarObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDCarObjects1[i].getX() >= 720 ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDCarObjects1[k] = gdjs.mainCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDCarObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDCarObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.mainCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mini_truck"), gdjs.mainCode.GDMini_95truckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Muscle_car"), gdjs.mainCode.GDMuscle_95carObjects1);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.mainCode.GDTaxiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.mainCode.GDTruckObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDCarObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDMuscle_9595carObjects1ObjectsGDgdjs_46mainCode_46GDTaxiObjects1ObjectsGDgdjs_46mainCode_46GDMini_9595truckObjects1ObjectsGDgdjs_46mainCode_46GDTruckObjects1Objects, false, runtimeScene, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Game_over"), gdjs.mainCode.GDGame_95overObjects1);
gdjs.copyArray(runtimeScene.getObjects("Game_over_fundo"), gdjs.mainCode.GDGame_95over_95fundoObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.mainCode.GDGame_95over_95fundoObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDGame_95over_95fundoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mainCode.GDGame_95overObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDGame_95overObjects1[i].hide(false);
}
}}

}


{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
gdjs.mainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.mainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{



}


{



}


{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.mainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.mainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mini_truck"), gdjs.mainCode.GDMini_95truckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Muscle_car"), gdjs.mainCode.GDMuscle_95carObjects1);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.mainCode.GDTaxiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.mainCode.GDTruckObjects1);
{for(var i = 0, len = gdjs.mainCode.GDMuscle_95carObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDMuscle_95carObjects1[i].addForce(0, 300, 0);
}
for(var i = 0, len = gdjs.mainCode.GDTaxiObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDTaxiObjects1[i].addForce(0, 300, 0);
}
for(var i = 0, len = gdjs.mainCode.GDMini_95truckObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDMini_95truckObjects1[i].addForce(0, 300, 0);
}
for(var i = 0, len = gdjs.mainCode.GDTruckObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDTruckObjects1[i].addForce(0, 300, 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Mini_truck"), gdjs.mainCode.GDMini_95truckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Muscle_car"), gdjs.mainCode.GDMuscle_95carObjects1);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.mainCode.GDTaxiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.mainCode.GDTruckObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDMuscle_95carObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDMuscle_95carObjects1[i].getY() >= 1100 ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDMuscle_95carObjects1[k] = gdjs.mainCode.GDMuscle_95carObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDMuscle_95carObjects1.length = k;for(var i = 0, k = 0, l = gdjs.mainCode.GDTaxiObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDTaxiObjects1[i].getY() >= 1100 ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDTaxiObjects1[k] = gdjs.mainCode.GDTaxiObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDTaxiObjects1.length = k;for(var i = 0, k = 0, l = gdjs.mainCode.GDMini_95truckObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDMini_95truckObjects1[i].getY() >= 1100 ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDMini_95truckObjects1[k] = gdjs.mainCode.GDMini_95truckObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDMini_95truckObjects1.length = k;for(var i = 0, k = 0, l = gdjs.mainCode.GDTruckObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDTruckObjects1[i].getY() >= 1100 ) {
        gdjs.mainCode.condition0IsTrue_0.val = true;
        gdjs.mainCode.GDTruckObjects1[k] = gdjs.mainCode.GDTruckObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDTruckObjects1.length = k;}if (gdjs.mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.mainCode.GDMini_95truckObjects1 */
/* Reuse gdjs.mainCode.GDMuscle_95carObjects1 */
/* Reuse gdjs.mainCode.GDTaxiObjects1 */
/* Reuse gdjs.mainCode.GDTruckObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDMuscle_95carObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDMuscle_95carObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDTaxiObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDTaxiObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDMini_95truckObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDMini_95truckObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDTruckObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDTruckObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.mainCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mini_truck"), gdjs.mainCode.GDMini_95truckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Muscle_car"), gdjs.mainCode.GDMuscle_95carObjects1);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.mainCode.GDTaxiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.mainCode.GDTruckObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
gdjs.mainCode.condition1IsTrue_0.val = false;
gdjs.mainCode.condition2IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.mainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.mainCode.GDMuscle_95carObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDMuscle_95carObjects1[i].getY() > (( gdjs.mainCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDCarObjects1[0].getPointY("")) ) {
        gdjs.mainCode.condition1IsTrue_0.val = true;
        gdjs.mainCode.GDMuscle_95carObjects1[k] = gdjs.mainCode.GDMuscle_95carObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDMuscle_95carObjects1.length = k;for(var i = 0, k = 0, l = gdjs.mainCode.GDTaxiObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDTaxiObjects1[i].getY() > (( gdjs.mainCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDCarObjects1[0].getPointY("")) ) {
        gdjs.mainCode.condition1IsTrue_0.val = true;
        gdjs.mainCode.GDTaxiObjects1[k] = gdjs.mainCode.GDTaxiObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDTaxiObjects1.length = k;for(var i = 0, k = 0, l = gdjs.mainCode.GDMini_95truckObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDMini_95truckObjects1[i].getY() > (( gdjs.mainCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDCarObjects1[0].getPointY("")) ) {
        gdjs.mainCode.condition1IsTrue_0.val = true;
        gdjs.mainCode.GDMini_95truckObjects1[k] = gdjs.mainCode.GDMini_95truckObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDMini_95truckObjects1.length = k;for(var i = 0, k = 0, l = gdjs.mainCode.GDTruckObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDTruckObjects1[i].getY() > (( gdjs.mainCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDCarObjects1[0].getPointY("")) ) {
        gdjs.mainCode.condition1IsTrue_0.val = true;
        gdjs.mainCode.GDTruckObjects1[k] = gdjs.mainCode.GDTruckObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDTruckObjects1.length = k;}if ( gdjs.mainCode.condition1IsTrue_0.val ) {
{
{gdjs.mainCode.conditionTrue_1 = gdjs.mainCode.condition2IsTrue_0;
gdjs.mainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8040540);
}
}}
}
if (gdjs.mainCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(100);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.mainCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.mainCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}}

}


{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.mainCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.mainCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDBackgroundObjects1[i].setYOffset(gdjs.mainCode.GDBackgroundObjects1[i].getYOffset() + (-(420) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrafficTimer");
}}

}


{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "TrafficTimer");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrafficTimer");
}}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDCarObjects1.length = 0;
gdjs.mainCode.GDCarObjects2.length = 0;
gdjs.mainCode.GDCarObjects3.length = 0;
gdjs.mainCode.GDMuscle_95carObjects1.length = 0;
gdjs.mainCode.GDMuscle_95carObjects2.length = 0;
gdjs.mainCode.GDMuscle_95carObjects3.length = 0;
gdjs.mainCode.GDTaxiObjects1.length = 0;
gdjs.mainCode.GDTaxiObjects2.length = 0;
gdjs.mainCode.GDTaxiObjects3.length = 0;
gdjs.mainCode.GDMini_95truckObjects1.length = 0;
gdjs.mainCode.GDMini_95truckObjects2.length = 0;
gdjs.mainCode.GDMini_95truckObjects3.length = 0;
gdjs.mainCode.GDTruckObjects1.length = 0;
gdjs.mainCode.GDTruckObjects2.length = 0;
gdjs.mainCode.GDTruckObjects3.length = 0;
gdjs.mainCode.GDBackgroundObjects1.length = 0;
gdjs.mainCode.GDBackgroundObjects2.length = 0;
gdjs.mainCode.GDBackgroundObjects3.length = 0;
gdjs.mainCode.GDScoreObjects1.length = 0;
gdjs.mainCode.GDScoreObjects2.length = 0;
gdjs.mainCode.GDScoreObjects3.length = 0;
gdjs.mainCode.GDGame_95overObjects1.length = 0;
gdjs.mainCode.GDGame_95overObjects2.length = 0;
gdjs.mainCode.GDGame_95overObjects3.length = 0;
gdjs.mainCode.GDGame_95over_95fundoObjects1.length = 0;
gdjs.mainCode.GDGame_95over_95fundoObjects2.length = 0;
gdjs.mainCode.GDGame_95over_95fundoObjects3.length = 0;

gdjs.mainCode.eventsList3(runtimeScene);

return;

}

gdjs['mainCode'] = gdjs.mainCode;
