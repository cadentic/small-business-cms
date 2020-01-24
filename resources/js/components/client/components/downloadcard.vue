<template>
    <div :class="['reportBox', {'pdf':pdf, 'doc':doc, 'xls':xls}]">
		<h3 >{{ title }}</h3>
		<a :href="downloadlink" class="pdfIcon">Download</a>
	</div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    .reportBox { width: 100% !important; height: 100% !important; font-family: 'Lato'; padding: 30px 30px 75px 30px; }
    .pdf:after { content: ''; display: block; width: 45px; height: 45px; background: url('../assets/DownloadCard/spriteImg.png') no-repeat -576px -64px; position: absolute; left: 20px; bottom: 30px; }
    .doc:after {content: ''; display: block; width: 45px; height: 45px; background: url('../assets/DownloadCard/spriteImg.png') no-repeat -650px -64px; position: absolute; left: 15px; bottom: 30px;}
    .xls:after {content: ''; display: block; width: 45px; height: 45px; background: url('../assets/DownloadCard/spriteImg.png') no-repeat -650px 0px; position: absolute; left: 23px; bottom: 28px;}
    .reportBox { float: left; background: #fff; position: relative; padding: 20px 20px 60px 20px; box-sizing: border-box; box-shadow: 0px 1px 30px -2px #c1c1c1; -webkit-box-shadow: 0px 1px 30px -2px #c1c1c1; -moz-box-shadow: 0px 1px 30px -2px #c1c1c1; -o-box-shadow: 0px 1px 30px -2px #c1c1c1; height: 100% }
    .reportBox h3 { width: 100%; float: left; color: #5e6061; font-size: 1.5em; font-weight: normal;margin-block-start: 1em; margin-block-end: 2em; margin-inline-start: 0px; margin-inline-end: 0px; }
    .reportBox a { position: absolute; bottom: 25px; left: 20px; font-size: 1em; padding-left: 45px; padding-bottom: 20px; color: #da251c; text-decoration: none;}
</style>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        downloadlink: {
            type: String,
            required: true
        },
        pdf: {
            type: Boolean,
            default: true
        },
        doc: {
            type: Boolean
        },
        xls: {
            type: Boolean
        }
    }
}
</script>