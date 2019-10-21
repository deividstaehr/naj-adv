module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        "react/react-in-jsx-scope": "off",
    },
    settings: {
        "import/resolver": {
            "babel-plugin-root-import": {
                rootPathSuffix: "src"
            }
        }
    },
};
