Want to create your own theme? Sure thing, _but_ please do it following these steps:

    - Find a Bootstrap **4**(!) theme on the internet. Examples are bootswatch.com & themestr.com
    - Create a new folder for your theme (no duplicate names and use lowercase)
    - Drag and drop the theme inside the newly created folder and rename the .css file following the syntax: "NAME.theme.css" and replace NAME with the theme name.
    - Create a new .json file. Use the following syntax: "NAME.theme.json" and replace NAME with the theme name.
    - Inside the .json copy the following lines and edit them respectively to your theme.
    - You can now publish your theme on the offical bDBS Github repo. Please make sure that your theme is open-sourced, we won't use premium themes!
    - Publishing your theme on the offical bDBS github repo will result it to be licensed
    under the GPL-3.0 License and will be intergrated into bDBS (once accepted).

JSON file:

```json
{
  "title": "Default",
  "description": "The default white theme from Discord Bot Studio.",
  "author": "Discord Bot Studio",
  "version": "1.0.0",
  "load": "default.theme.css"
}
```

Thanks!
~ qschnitzel / serapisdev
