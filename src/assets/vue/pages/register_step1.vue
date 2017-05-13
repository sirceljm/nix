<template>
	<f7-page class="primary-bg">
		<!-- <f7-navbar title="Form" back-link="Back" sliding></f7-navbar> -->
        <h2 class="title">Create an account</h2>
        <div class="title-desc-wrap">
            <div class="title-desc-content">
                Please provide your personal information in the fields below so we can get started.
             </div>
        </div>
        <f7-block>
        <div class="form-content-wrap">
            <div class="form-group">
                <input type="text" name="fullname"  placeholder="Firstname" class="form-control" >
            </div>
             <div class="form-group">
                <input type="email" name="Email"  placeholder="Email" class="form-control" >
            </div>
             <div class="form-group">
                <input type="password" name="Password" placeholder="Password" class="form-control" >
            </div>
            <div class="form-group">
                <input type="date" name="date" placeholder="Date of birth" class="form-control" >
            </div>
        </div>
        </f7-block>
        <div class="bullets">
            <span class="bullet active"></span>
            <span class="bullet"></span>
            <span class="bullet"></span>
        </div>
        <div class="bottom-nav flex flex-center">
                <div class="text-center bottom-nav-links">
                    <div class="col-xs-6 button-col">
                    </div>
                     <div class="col-xs-6 button-col">
                            <f7-link href="/signup-step2/">next</f7-link>
                            <span class="hidden-color"><i class="fa fa-angle-right"></i></span>
                    </div>
                </div>
        </div>
	</f7-page>
</template>

<script>
	export default {
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