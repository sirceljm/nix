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
                <i class="fa fa-ellipsis-h"></i>
            </div>
        </div>
        <div id="main-content">
            <div class="title-large">
                Get better soon!
            </div>
        </div>
        <div id="main-bottom">
            <div class="btn btn-primary btn-width btn-margin">
                Record a video
            </div>
            <div class="btn btn-info btn-width btn-margin">
                Submit doctor's report
            </div>
            <div class="btn btn-info btn-width btn-margin">
                Leave me alone
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