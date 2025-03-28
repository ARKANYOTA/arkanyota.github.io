<script>
    import Page from "$lib/components/Page.svelte";
    import Code from "$lib/components/Pages/Code.svelte";
    import Home from "$lib/components/Pages/Home.svelte";
    import Game from "$lib/components/Pages/Game.svelte";
    import Flag from "$lib/components/Pages/Flag.svelte";
    import About from "$lib/components/Pages/About.svelte";
    import Contact from "$lib/components/Pages/Contact.svelte";
    import Competances from "$lib/components/Pages/Competances.svelte";
    import Nav from "$lib/components/Pages/Nav.svelte";


    document.addEventListener("keydown", (event) => {
        if (event.key === "g") {
           document.cookie = "dev-icon-simple=true";
           console.log("dev-icon-simple=true");
        }
        if (event.key === "f") {
            document.cookie = "dev-icon-simple=false";
            console.log("dev-icon-simple=false");
        }
    })
</script>

<div>
    <Nav />
    <Page title="home">
        <Home />
    </Page>
    <Page title="code">
        <Code />
    </Page>
    <Page title="games">
        <Game />
    </Page>
    <Page title="flag">
        <Flag />
    </Page>
    <Page title="competances">
        <Competances />
    </Page>
    <Page title="about">
        <About />
    </Page>
    <Page title="contact">
        <Contact />
    </Page>
</div>