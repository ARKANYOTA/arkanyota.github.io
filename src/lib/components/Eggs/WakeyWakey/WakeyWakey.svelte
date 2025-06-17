<script>
    import {onMount} from "svelte";

    let current_state = $state(0); // 0 sleep, 1 awake, 2 overexcited

    let is_timeouted = $state(false);
    let eh_laisse_moi_dormir_wesh = $state(0);


    onMount(() => {
        const wakeyWakeyContainer = document.getElementById("wakey-wakey-container");
        if (!wakeyWakeyContainer) return;
        wakeyWakeyContainer.addEventListener("mouseenter", () => {
            if (eh_laisse_moi_dormir_wesh >= 3) {
                current_state = 2; // overexcited
                return;
            };
            if (is_timeouted) return; // already hovered
            current_state = 1; // awake
            is_timeouted = true;
            setTimeout(() => {
                current_state = 0; // overexcited
                is_timeouted = false;
                eh_laisse_moi_dormir_wesh++;
            }, 5000);
        });
    })

    function handleClick() {
        if (current_state === 2) {
            window.location.href = "https://monster.arkanyota.com"
        }
    }

</script>

<div id="wakey-wakey-container" onclick={handleClick} style="cursor: {current_state === 2 ? 'pointer' : 'default'}" aria-label="Wakey Wakey">
    <div class="globs">
        <div class="glob" data-state={current_state===0 ? 'sleepy' : (current_state ===1 ? 'awake' : 'overexcited')}></div>
        <div class="glob-eyes" data-state={current_state===0 ? 'sleepy' : (current_state ===1 ? 'awake' : 'overexcited')}></div>
    </div>
    {#if current_state === 2}
        <img src="/images/eggs/monster.png" alt="monster"  class="monster"/>
    {/if}
</div>

<style>
    #wakey-wakey-container {
        position: relative;
        left: 10px
    }
    .globs {
        width: 42px;
        height: 42px;
        margin: 0 auto;
    }

    .glob {
        position: absolute;
        width: 42px;
        height: 42px;
        background-image: url("/images/eggs/spritesheet.png");
        background-size: cover;
        background-position: 0 0;
        image-rendering: pixelated;
        z-index: 1;
    }

    .glob[data-state="overexcited"] {
        background-image: url("/images/eggs/spritesheet_overexcited.png");
    }

    .glob-eyes {
        position: absolute;
        width: 42px;
        height: 42px;
        background-image: url("/images/eggs/sleeping.png");
        background-size: auto 42px;
        background-position: 0 0;
        image-rendering: pixelated;
        animation: heartAnimation 1.5s steps(5) alternate infinite;
        z-index: 2;
    }

    @keyframes heartAnimation {
      from {
        /* first frame */
        background-position: 0px 0px;
      }
      to {
        /* last frame */
        background-position: calc(42*5px) 0px;
      }
    }


    .glob-eyes[data-state="awake"] {
        background-image: url("/images/eggs/happy.png");
    }

    .glob-eyes[data-state="overexcited"] {
        background-image: url("/images/eggs/overexcited.png");
    }

    .monster {
        position: absolute;
        width: 20px;
        transform: rotate(25deg);
        top: 5px;
        right: -18px;
        z-index: 0;
    }
</style>