## THIS APP DISPLAYS SOME PROJECTS I HAVE WORKED ON

![Alt text](assets/HomeScreenshot.png?raw=true "Screnshot of Homescreen of application. Video below shows animation.")

The simplest way to see my portfolio app in action is to click the link below.

[Link to 20 second video demonstration](https://youtu.be/F9M3a3Xp9T0)


If you want to use my portfolio app live you will need to clone and run locally with an ios simulator or scan a device through the expo QR code.
(Currently optimised for ios but functions well on both operating systems.)

## SCROLL PORTFOLIO APP

The 'scroll app' in which the projects are displayed I also built using mostly the
features mentioned below:

1. Uses mostly Y indexes to adjust profile image size and text size when scrolling.

2. Also when tapping the header it will automatically scroll you to the top of
   the screen using the scrollview reference.

3. Interpolates a scrollY animation in order to adjust the heights of the header, name and image.
   Then sneaks a white name on top of the now smaller header ready to continue scrolling and
   maximise screen real estate when looing at more content.

## RUNNING LOCALLY

1. npm i in the terminal will install any necessary dependencies.

2. to see the application in an emulator you will likely need xcode or at least access to the emulators.

3. next in the terminal 

```npm run ios``` 

This will likely prompt to install expo globally. (This may take some time - grab a coffee)

- If this doesnt work and expo can be a pain to install globally you ay need to sudo the command.
```diff
- Worst comes to worse run this command: sudo npm install expo-cli -g --unsafe-perm

4. you should then see after a minute or two the ios emulator running the application.

5. If you have the expo applcation on your device then scanning teh qr code runs it locally.
