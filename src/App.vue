<template>
    <div id="app">
        <header class="header">
            <div class="container-nav">
                <h1 class="brand">Headline News</h1>
                <nav class="inner">
                    <a href="https://newsapi.org/" target="_blank" rel="noopener">News API</a>
                    <a href="https://github.com/iamfunsho" target="_blank" rel="noopener">Github Repo</a>
                    <a href="https://ssr.vuejs.org" target="_blank" rel="noopener">Vue.JS SSR</a>
                </nav>
            </div>
        </header>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<style>
    .header{
        background-color: #515E7E;
        padding: 1.5rem 1rem;
        text-align: center;
    }
    .container-nav{
        max-width: 1000px;
        margin: auto;
    }
    .brand{
        font-size: 2rem;
        line-height: 1.5;
        font-weight: 900;
        color: #F1EDEC;
        display: inline-block;
        margin-right: 5rem;
    }
    nav.inner{
        display: inline-block;
    }
    nav.inner a{
        text-decoration: none;
        color: #F1EDEC;
        font-size: 1.6rem;
        line-height: 1.5;
        font-weight: 300;
        text-transform: capitalize;
        padding: 0 1rem;
    }
    nav.inner a:hover{
        text-decoration: underline;
    }
</style>
