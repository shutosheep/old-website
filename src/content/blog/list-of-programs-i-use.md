---
title: List of programs I use
pubDate: 2022-08-06
description: I list my programs I use
---

I sometimes get the question "What programs do you use?" from my friend so I
will explain.

## What I want

I want to get my things done efficiently so I want to have...

+ Keyboard centric (vim like key bindings)
+ Free and open source (if possible)
+ Minimal and extensible

## Basics

### Operating system

Gnu/Linux. Specifically I use [Arch](https://archlinux.org/) or
[Artix](https://artixlinux.org/). Arch is hard to use at first but if you get
used with it. It provides access to [AUR](https://aur.archlinux.org/) which
lets you use various programs and the [ArchWiki](https://wiki.archlinux.org/)
is well documented.

I also considered using [Gentoo](https://www.gentoo.org/) but compiling
everything from source is time consuming and it is not worth it for me.

### Terminal

I use Luke Smith's build of [st](https://github.com/lukesmithxyz/st). His build
has features like copying output of the command, opening the links of the
command output. This is very useful and saves me a lot of time. I do have my
own build of st. But I just realized that it is a waste of time to patch and
configure it.

### Desktop environment

I use my fork of [dwm](https://github.com/shutosheep/dwm). Dwm misses some
features which most other window managers have so I added some patches. For
status bar, I use [dwmblocks](https://github.com/torrinfail/dwmblocks).

### Text editor

For general purpose I use [neovim](https://neovim.io/). I realized that vim is very powerful tool
that is must learn program for those who use computers.

For programming I use [emacs](https://www.gnu.org/software/emacs/). I switched
from vim to emacs and I love this thing. At first it takes time to get used
with it but once you learn it you can do your stuff efficiently.

### Web browser

[firefox](https://www.mozilla.org/en-US/firefox/). I install [arkenfox
user.js](https://github.com/arkenfox/user.js) and install some add-ons. Just be
aware that default firefox comes with
[trackers](https://spyware.neocities.org/articles/firefox.html) and annoying
features. Like yeah I just want to browse the Internet I don't care about your
political opinion. For add-ons I use...

+ [ublock-origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
+ [Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)
+ [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/)

I also tried using minimal browsers like [surf](https://surf.suckless.org/) or
[qute browser](https://qutebrowser.org/) but to browse the modern bloated web
it does not work well. On the other hand [Vieb](https://vieb.dev/) can handle
modern websites pretty well but it is electron based so no thanks.

## Utilities

### Image viewer

[sxiv](https://github.com/muennich/sxiv). It also has thumbnail and slideshow
modes. It can also run custom shell scripts which can read/write to standard
input/output.

### Video player

[mpv](https://mpv.io/). It can be extended by using lua scripts. I don't
customize it at all though.

### Pdf viewer

[zathura](https://pwmt.org/projects/zathura/). It supports PDF documents,
PostScript, DjVu.

## Links

These links might help you find better software.

+ [Recommended GNU/Linux software](https://wiki.installgentoo.com/index.php/List_of_recommended_GNU/Linux_software)
+ [Alternative to bloatware](https://github.com/mayfrost/guides/blob/master/ALTERNATIVES.md)
+ [Software that rocks](https://suckless.org/rocks/)
