<h1 align="center">
  <img src=".github/banner.png" alt="Ciphwren Notes" width="880" />
</h1>

> [!NOTE]
> **This is an independent fork** of [EteSync Notes](https://github.com/etesync/etesync-notes), the original
> project of the EteSync authors. This fork is not affiliated with, endorsed by or supported by EteSync
> in any way. The history of the original project is kept as it is, with its authors, and the changes
> of this fork follow it. Like the original, it's licensed under the
> [GPL-3.0](LICENSES/GPL-3.0-only).

Secure, end-to-end encrypted, and privacy-respecting notes and bookmarks for Android, synced with an
[Etebase](https://github.com/etesync/server) server that you run yourself.

- Notes in Markdown, in notebooks, which can be searched, exported to a zip and imported from one
- Bookmarks, saved from the share menu of other apps, without the links' tracking parameters (e.g.
  `utm_source`, `fbclid`)
- Works offline, and syncs while the app is open

<p align="center">
  <img src="fastlane/metadata/android/en-US/images/phoneScreenshots/1-notes.png" alt="The list of notes, with pinned ones first" width="19%" />
  <img src="fastlane/metadata/android/en-US/images/phoneScreenshots/2-note.png" alt="A note with a checklist" width="19%" />
  <img src="fastlane/metadata/android/en-US/images/phoneScreenshots/4-bookmarks.png" alt="The bookmarks, with their lists and tags" width="19%" />
  <img src="fastlane/metadata/android/en-US/images/phoneScreenshots/5-save-a-link.png" alt="Saving a link shared from another app" width="19%" />
  <img src="fastlane/metadata/android/en-US/images/phoneScreenshots/6-dark-mode.png" alt="The notes in the dark theme" width="19%" />
</p>

## Download

The APKs are on the [releases page](https://github.com/nikossvnk/ciphwren-notes/releases):
`ciphwren-notes-X.Y.Z.apk` for 64-bit phones (nearly all of them), and
`ciphwren-notes-X.Y.Z-armeabi-v7a.apk` for older 32-bit phones. Each has a `.sha256` next to it.

Ciphwren Notes was called EteSync Notes (`com.etesync.notes`) before. It's now a separate app
(`com.ciphwren.notes`), which an EteSync Notes install doesn't update to: install it next to the old
one and log in (sync the old one first, then uninstall it).

## Building

It's an [Expo](https://expo.dev) (React Native) app. With Node.js 24, JDK 17 and the Android SDK
(`ANDROID_HOME` set):

```
npm install
npx tsc --noEmit && npm run lint    # the checks CI runs
npm run android                     # build, install and start it on a device or emulator
```

A release APK: `cd android && ./gradlew assembleRelease`. It's signed with the debug key unless the
release key is given (see `android/app/build.gradle`), and such builds are for testing only. Releases
are built by the release workflow when a `vX.Y.Z` tag is pushed.

The app also builds for the web (`npx expo export --platform web`), which is only used by the
browser tests in [`e2e`](e2e/README.md).
