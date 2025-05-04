<script>
    let amount = '';
</script>

<main class="">
	<div class="text-center">
		<div class="my-16">
			<h1 class="text-4xl md:text-7xl font-black mb-4 animate-in fade-in slide-in-from-left-12 duration-700">
				Pay Me!
			</h1>
			<h4 class="md:text-2xl font-semibold italic animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
				Stripe API Testing
			</h4>
            <br/>
            <br/>
            <p>
               You don't need to pay me (unless you want to 🤣). <br/>
               This is a test page for the Stripe API.
            </p>

            <form
                class="flex flex-col gap-2 mt-4 p-4 bg-base-100 rounded-lg shadow"
                on:submit|preventDefault={() => {
                    // You can add payment logic here
                    alert(`Paying $${amount}`);
                }}
            >
                <label class="font-semibold text-center text-xl" for="amount">Dollar Amount</label>
                <input
                    id="amount"
                    type="text"
                    min="0"
                    placeholder="Enter amount"
                    bind:value={amount}
                    class="input input-bordered w-32 mx-auto"
                />
                <button
                    type="submit"
                    class="mx-auto py-2 mt-4 w-30 bg-gradient-to-bl from-primary-700 to-secondary-700 text-white font-bold text-lg px-4 rounded border border-white transition-all duration-300 hover:bg-blue-700 hover:bg-none hover:from-transparent hover:to-transparent"
                >
                    PAY
                </button>
            </form>
            
            
		</div>
    </div>

		
</main>
