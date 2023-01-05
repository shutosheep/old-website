---
layout: '@layouts/BlogPage.astro'
title: Remap Caps Lock key on Linux
pubDate: 2022-12-07
description: Just my note on how to remap Caps Lock key
---

For the past few months I have been using Vim. My friends strongly
recommend me to bind caps lock to escape since escape key is far away
from the home position and it would be easier for my fingers.

I remapped caps lock using `setxkbmap`. All of the available options to use with
`setxkbmap` are in `/usr/share/X11/xkb/rules/xorg.lst` To get the list of
available options relating to caps lock run

```sh
grep caps /usr/share/X11/xkb/rules/xorg.lst
```

This will return something like this

```
[shuto@desktop ~]$ grep caps /usr/share/X11/xkb/rules/xorg.lst 
  grp:caps_switch      Caps Lock (while pressed), Alt+Caps Lock for the original Caps Lock action 
  grp:caps_toggle      Caps Lock 
  grp:shift_caps_toggle Shift+Caps Lock 
  grp:caps_select      Caps Lock to first layout; Shift+Caps Lock to second layout 
  grp:alt_caps_toggle  Alt+Caps Lock 
  lv3:caps_switch      Caps Lock 
  lv3:caps_switch_latch Caps Lock; acts as onetime lock when pressed together with another 3rd-level chooser 
  ctrl:nocaps          Caps Lock as Ctrl 
  ctrl:swapcaps        Swap Ctrl and Caps Lock 
  ctrl:hyper_capscontrol Caps Lock as Ctrl, Ctrl as Hyper 
  grp_led:caps         Caps Lock 
  caps                 Caps Lock behavior 
  caps:internal        Caps Lock uses internal capitalization; Shift "pauses" Caps Lock 
  caps:internal_nocancel Caps Lock uses internal capitalization; Shift does not affect Caps Lock 
  caps:shift           Caps Lock acts as Shift with locking; Shift "pauses" Caps Lock 
  caps:shift_nocancel  Caps Lock acts as Shift with locking; Shift does not affect Caps Lock 
  caps:capslock        Caps Lock toggles normal capitalization of alphabetic characters 
  caps:shiftlock       Caps Lock toggles Shift Lock (affects all keys) 
  caps:swapescape      Swap Esc and Caps Lock 
  caps:escape          Make Caps Lock an additional Esc 
  caps:escape_shifted_capslock Make Caps Lock an additional Esc, but Shift + Caps Lock is the regular Caps Lock 
  caps:backspace       Make Caps Lock an additional Backspace 
  caps:super           Make Caps Lock an additional Super 
  caps:hyper           Make Caps Lock an additional Hyper 
  caps:menu            Make Caps Lock an additional Menu key 
  caps:numlock         Make Caps Lock an additional Num Lock 
  caps:ctrl_modifier   Make Caps Lock an additional Ctrl 
  caps:none            Caps Lock is disabled 
  compose:caps         Caps Lock 
  compose:caps-altgr   3rd level of Caps Lock 
  shift:breaks_caps    Shift cancels Caps Lock 
  shift:both_capslock  Both Shifts together enable Caps Lock 
  shift:both_capslock_cancel Both Shifts together enable Caps Lock; one Shift key disables it 
  lv5:caps_switch      Caps Lock chooses 5th level 
  lv5:caps_switch      Caps Lock chooses 5th level 
```

Now you can run `setkxbmap` with the options you want to use.
Personally I was interested in `shift:both_capslock` since this allows
me to use both as an escape key and regular caps lock. But since I
believe I will rarely use caps lock, I will not use this option.

Since I use `startx` instead of login managers, all I have to do was
to put this in my `.xinitrc` file.

```sh
setxkbmap -option caps:escape &

pgrep dwmblocks || dwmblocks &
exec dwm
```

Now I can use my caps lock key as an escape key.

## References

[Xorg/Keyboard configuration](https://wiki.archlinux.org/title/Xorg/Keyboard_configuration)
