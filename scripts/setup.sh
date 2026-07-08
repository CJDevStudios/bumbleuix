#!/bin/bash

case $1 in
    vue)
        cd submodules/bumblevue && pnpm run setup && \
        cd apps/showcase && pnpm link @cjdevstudios/bumbleuix-themes @cjdevstudios/bumbleuix-styles --global && \
        cd ../../packages/core && pnpm link @cjdevstudios/bumbleuix-styled @cjdevstudios/bumbleuix-utils --global && \
        cd ../themes && pnpm link @cjdevstudios/bumbleuix-themes @cjdevstudios/bumbleuix-styles --global && \
        cd ../bumblevue && pnpm link @cjdevstudios/bumbleuix-styled @cjdevstudios/bumbleuix-styles @cjdevstudios/bumbleuix-themes @cjdevstudios/bumbleuix-utils --global && \
        cd ../forms && pnpm link @cjdevstudios/bumbleuix-forms @cjdevstudios/bumbleuix-utils --global
        ;;
esac
