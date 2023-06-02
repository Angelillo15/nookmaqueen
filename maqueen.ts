//% weight=100 color=#ff6b6b icon="\uf136" block="NookMaqueen"
//% groups=['micro:bit(v2)']
namespace maqueen {

}

enum NMotors {
    //% blockId="left motor" block="Left"
    M1 = 0,
    //% blockId="right motor" block="Right"
    M2 = 1,
    //% blockId="all motor" block="All"
    All = 2
}

enum NDir {
    //% blockId="CW" block="Forward"
    CW = 0x0,
    //% blockId="CCW" block="Backward"
    CCW = 0x1
}