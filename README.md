# Expo Linking API EventListener Bug

This repository demonstrates a bug in the Expo `Linking` API where the `Linking.addEventListener` for deep links does not reliably fire if the app is already open.  After the initial app launch and successful deep link processing, subsequent deep links fail to trigger the event listener.  This results in the app not responding to deep links correctly after the first use in a single session.

## Problem Description

The problem lies with how Expo handles deep links when the app is already running.  The initial deep link works as expected; however, subsequent deep links are ignored.  The event listener seems to be registered, but it's not triggered. This behavior is inconsistent and difficult to debug.

## Solution

The `deepLinkSolution.js` file shows how to use the provided `getInitialURL` method and handle the deep link appropriately in cases where the app is opened for the first time, in contrast to when the application is already running. 

## Reproduction

1. Clone this repository.
2. Run the `deepLinkBug.js` example with Expo Go.
3. Open a deep link (e.g., `expo://example.com/deeplink`). The application will handle it correctly. 
4. Try to open another different deep link (e.g., `expo://example.com/another`). The application will NOT handle it.