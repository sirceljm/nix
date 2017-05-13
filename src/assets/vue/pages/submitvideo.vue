<template>
	<f7-page class="main-app">
        <div id="main-top-bar">
            <div class="main-top-bar-item">
                <i class="fa fa-thermometer-half"></i>
            </div>
            <div class="main-top-bar-item main-top-bar-item-title">
                Sick leave
            </div>
            <div class="main-top-bar-item">
                <i class="fa fa-user"></i>
            </div>
        </div>
        <div id="main-content">
            <div class="main-content-center">
                <div class="title-large dashboard-title">
                   <div>Recording complete.</div>
                   <div class="check">
                       <i class="fa fa-check-circle-o">
                       </i>
                   </div>
                </div>
            </div>
        </div>
        <div id="main-bottom">
            <div class="main-content-desc margin-bottom-10 text-center">
                Increase your daily compensation by 40%
            </div>
            <div class="main-content-desc margin-bottom-10 text-center width-80 helper-color margin-top-0">
                After submiting the video your daily compensation will increase from 50€ to 70€.
            </div>
            <div class="btn btn-primary btn-width btn-margin">
                Submit the video
            </div>
        </div>
	</f7-page>
</template>

<script>
	export default {
        created: function() {
            EventHub.$emit('nav', true);
        },
        data: function(){
            return {
                form: {
                    fullname: null,
                    email: null,
                    password: null,
                }
            }
        },
    }
</script>