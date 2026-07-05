# BumbleUIX

BumbleUIX is the theming package for BumbleVue and related projects.

### Setup

> [!IMPORTANT]
> This project requires **pnpm 9.6.0 or later**. Please ensure the correct version is installed before proceeding.

1. **Initialize Git Submodules**
   On a fresh clone, submodules must be initialized before running any setup commands:

   ```sh
   git submodule update --init --recursive
   ```

2. **Link Dependencies**  
   Run the following command to link dependencies:

   ```sh
   pnpm run link
   ```

   If any issues occur, it may be necessary to manually run the following command for each package inside the `packages` folder:

   ```sh
   cd packages/forms && pnpm run dev:link
   cd packages/themes && pnpm run dev:link
   ```

   In some cases, permission issues might require using `sudo`. For example:

   ```sh
   cd packages/themes && sudo pnpm run dev:link
   ```

> [!NOTE]
> This linking process only needs to be performed once.

3. **Setup the Project**  
   Run the following command to bootstrap the workspace:

   ```sh
   pnpm run setup
   ```

4. **Start Development Server**

     ```sh
     pnpm run vue:dev
     ```

### Submodules

This project includes **BumbleVue** as a submodules. To update this submodule, run the following command:

   ```sh
   git submodule update --init --remote --merge
   ```

All set! Happy coding! 🚀
