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
                   <div>Video submitted.</div>
                   <div>Thank you.</div>
                   <div class="check active">
                       <i class="fa fa-check-circle-o">
                       </i>
                   </div>
                </div>
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