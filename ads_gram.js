
function showAds(taskId, bonus) {
    const AdController = window.Adsgram.init({ blockId: "4046" });
    AdController.show().then((result) => {
      addCompleted(taskId, bonus);
    }).catch((result) => {
      // user get error during playing ad or skip ad
      // do nothing or whatever you want
    })
  }

  function showHomePageAds(taskId, bonus) {

    const AdController = window.Adsgram.init({ blockId: "4189" });
    AdController.show().then((result) => {
      addCompleted(taskId, bonus);
    }).catch((result) => {
      // user get error during playing ad or skip ad
      // do nothing or whatever you want
    })
  }

   

 