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
            <div class="sick-tabs margin-bottom-25 margin-top-minus">
                <div class="sick-tabs-header" v-on:click="goBack()">
                    <div class="sick-tabs-title"> <span class="i margin-right-angle fa fa-angle-left"></span> Day 2 - <span class="normal">May 19, 2017</span></div>
                    <div>70 - 100€</div>
                </div>

                <div class="sick-checklist">
                    <div class="sick-item-nonactive flex flex-space">
                        <div class="flex">
                            <span class="circle"></span>
                            <span>GPS confirmation pending</span>
                        </div>
                        <span><i class="fa fa-angle-right"></i></span>
                    </div>
                </div>
            </div>
            <div class="sick-main-content text-center">
                <div class="helper">Are you feeling better?</div>
                <div class="btn btn-primary width-80">End sick leave</div>
            </div>
        </div>
        <div id="main-bottom">

        </div>
	</f7-page>
</template>

<script>
    import backMixin from './backMixin';

	export default {
        created: function() {
            EventHub.$emit('nav', true);
        },
        mixins:[backMixin],
    }
</script>