# IPARSER ![IPARSER](res/icon/android/icon-48-hdpi.png)
Cordova app - This application transforms all vowels to vowel i.

## Instalation
> Run in terminal `npm install` from the repository root.

## Using app
You write a text in the first text area, the click the white-eyes emoji and it
 will replace all vowels by the vowel i.

You can copy the trasformed text by clicking the copy button.

But if any word in your text is in the json, then it will be replaced by the
 json replacement.

## Writing json to replace words.
**First is the order to apply the replacements *"0", "1"* then the word or
 text to replace *["word",*, third the replacement *, "final text"* and
 finally, if it will replace all text or only the match, *true* will replace all
 textarea value by the replacement.**
```
{
  "0": ["word", "replacement"],
  "1": ["other text", "final text", true]
}
```

## Build apk.
> Run `cordova build android`.

## Test the app in emulator.
> Run `cordova run android`

## Add new plugin to the project.
> Run `cordova plugin add cordova-plugin-splashscreen`

## Aclarations.
Cordova needs to be installed and if you want to run in a android emulator you
 needs the SDK library.

## Interesting documentation.
**Apache cordova**  
[![Apache cordova](res/icon/android/icon-72-hdpi.png)](https://cordova.apache.org/docs)
