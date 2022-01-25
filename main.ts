namespace SpriteKind {
    export const Unalived_Enemy = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -10
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.create(assets.image`missile`, SpriteKind.Projectile)
    projectile.destroy()
    scene.setBackgroundColor(15)
    projectile = sprites.createProjectileFromSprite(assets.image`missile`, mySprite, 0, 20)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 10
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    Unalived_Enemys = sprites.create(assets.image`Dead Enemy`, SpriteKind.Enemy)
    pause(1000)
    game.splash("GG!")
    game.reset()
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.splash("GG!")
    pause(1000)
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Enemys.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
})
let Unalived_Enemys: Sprite = null
let projectile: Sprite = null
let Enemys: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`P1`, SpriteKind.Player)
Enemys = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
Enemys.setPosition(80, 110)
Enemys.follow(mySprite, 10)
mySprite.setBounceOnWall(true)
forever(function () {
    if (true) {
    	
    }
})
