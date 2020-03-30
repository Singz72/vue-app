module.eports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      console.log("production");
    } else {
      console.log("development");
    }
    return {
      output: {
        libraryExport: "default"
      }
    };
  }
};
