import themeLight from "./light_theme";
import themeDark from "./dark_theme";

const switchTheme = (light:boolean) => {
    if (light){
        return themeLight;
    }else {
        return themeDark;
    }
}

export default switchTheme;