<template>
	<f7-page class="primary-bg">
		<!-- <f7-navbar title="Form" back-link="Back" sliding></f7-navbar> -->
		<h2 class="title">Create an account</h2>
        <p>Please provide your personal information in the fields below so we can get started.</p>
         <p>Please provide your personal information in the fields below so we can get started.</p>

       <!--  <f7-block>
         </f7-block> -->
         <div class="bottom-btn">
            <f7-link href="/signup-step4/" class="btn btn-info">Get verified</f7-link>
         </div>
        <div class="bullets">
            <span class="bullet"></span>
            <span class="bullet"></span>
            <span class="bullet active"></span>
        </div>
        <div class="bottom-nav flex flex-center">
                <div class="text-center">
                    <div><b>SKIP THIS STEP</b></div>
                    <div>if you have insurance with us</div>
                    <div> <i class="fa fa-angle-down"></i></div>
                </div>
        </div>

	</f7-page>
</template>

<script>
    import backMixin from './backMixin'
	export default {
        mixins: [backMixin]
    }
</script>