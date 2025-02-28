var posts=["article/electron-env/","article/x-ui/","article/hello-hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };