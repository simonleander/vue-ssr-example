<template>
    <div>
        <div class="banner">
            <h1>Pick a news source</h1>
        </div>
        <div class="sources">
            <div class="container">
                <ol>
                    <li v-for="source in sources" class="source">
                        <div><span>{{source.category}}</span><span>{{source.language}}</span></div>
                        <h2>{{source.name}}</h2>
                        <p>{{source.description}}</p>
                        <p class="action"><router-link :to="'article/' + source.id">Get Headlines</router-link></p>
                        <!--<p><a :href="'article/'+source.id"></a></p>-->
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		asyncData ({ store, route }) {
			// return the Promise from the action
			return store.dispatch('fetchSources')
		},
		computed: {

			sources () {
				return this.$store.state.sources.sources
			}
		}
	}
</script>

<style>
    .container{
        max-width: 1000px;
        margin: auto;
        padding-top: 6rem;
    }
    .banner{
        background-color: #9795A4;
        color: #F1EDEC;
    }
    .banner h1{
        padding: 12rem 5rem 8rem 0;
        font-size: 5rem;
        font-weight: 900;
        max-width: 1000px;
        margin: auto;
    }
    .sources{
        background-color: #F1EDEC;
    }

    .source{
        list-style: none;
        border-radius: 6px;
        background-color: #515E7E;
        color: #F1EDEC;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        margin-bottom: 3rem;
        padding: 3rem;
    }
    .source div span{
        background-color: #E8587C;
        color: #fff;
        padding: 3px 6px;
        margin: 10px 1px;
        font-size: 9px;
        text-transform: uppercase;
        display: inline-block;
    }
    .source h2{
        color: #fff;
        display: block;
        font-size: 2rem;
        margin: 1rem 0;
        font-weight: 900;
    }
    .source p{
        display: block;
        font-size: 1.4rem;
        color: #fff;
        line-height: 1.5;
        font-weight: 300;
    }
    .action{
        padding-top: 4rem;
        text-align: center;
    }
    .action a {
        background-color: #E8587C;
        color: #FFFFFF;
        border: none;
        border-radius: 3px;
        position: relative;
        padding: 12px 30px;
        margin: 10px 1px;
        font-size: 12px;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0;
        will-change: box-shadow, transform;
        transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: none;
    }
</style>
