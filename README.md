# Cinematic Effects

Add cinematic effects to your MakeCode Arcade games!

## Features

- 🎥 Camera shake
- ⚡ Screen flash effects
- 🕒 Slow motion
- 👾 Boss intro screens
- 🌅 Fade transitions (coming soon)
- 🔍 Camera zoom (coming soon)
- 🎬 Cinematic letterbox bars (coming soon)

## Installation

1. Open MakeCode Arcade.
2. Open your project.
3. Click **Extensions**.
4. Paste this GitHub repository URL:https://github.com/b9oo/effects
5. Click **Import**.

## Blocks

### Shake Camera

Shakes the camera for dramatic effects.

```typescript
cinematic.shakeCamera(8, 1000)
```

### Flash Screen

Flashes the screen using a color.

```typescript
cinematic.flashScreen(2, 200)
```

### Boss Intro

Shows a boss title screen.

```typescript
cinematic.showBossIntro("MEGA DRAGON")
```

### Slow Motion

Changes game speed.

```typescript
cinematic.setSlowMotion(50)
```

## Example

```typescript
cinematic.showBossIntro("MEGA DRAGON")

cinematic.shakeCamera(8, 1000)

cinematic.flashScreen(2, 200)

cinematic.setSlowMotion(50)
pause(2000)
cinematic.setSlowMotion(100)
```

## Future Plans

- Camera zoom
- Fade in/out effects
- Letterbox cinematic bars
- Dynamic lighting
- Cutscene system
- Dialogue boxes
- Particle effects

## Screenshots

Add screenshots of your extension here.

## License

MIT License

## Credits

Created for MakeCode Arcade.

Have fun making awesome boss fights, cutscenes, and action-packed games!
