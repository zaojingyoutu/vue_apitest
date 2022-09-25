<template>
  <div class="video">
    <video-player
    :src="data.src"
    poster="/your-path/poster.jpg"


    :loop="true"
    :volume="0.6"
  />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import 'video.js/dist/video-js.css';
import { VideoPlayer } from '@videojs-player/vue'
export default {
components: {
      VideoPlayer
    },
  name: 'Video',
  props:['video','cover'],
  setup(props){
    let data = reactive({
          src: props.video,
          poster: props.cover, // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。

    })
    return {
      data
    }
  }

}
</script>

<style scoped>
  .video{
    width: 100%;
    height: 100%;
    margin: auto;
  }
</style>

