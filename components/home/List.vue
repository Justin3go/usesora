<template>
	<div class="list-container">
		<v-card >
			<template v-slot:text>
				<v-text-field
					v-model="search"
					label="Search for high-quality prompts"
					prepend-inner-icon="mdi-magnify"
					single-line
					variant="outlined"
					hide-details
				></v-text-field>
			</template>

			<v-data-table
				v-model:expanded="expanded"
				:headers="headers"
				:items="data"

				item-value="prompt"
			>
				<template v-slot:item.prompt="{ item }">
					<div>
						{{ item.prompt }}
					</div>
				</template>
				<template v-slot:item.homepage="{ item }">
					<v-btn class="text-capitalize" color="primary" variant="text" :href="item.homepage" target="_blank"> Go to Page </v-btn>
				</template>
				<template v-slot:item.video="{ item }">
					<v-card class="my-2" elevation="2" rounded>
						<iframe
							width="192"
							height="108"
							:src="item.video"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</v-card>
				</template>
			</v-data-table>
		</v-card>
	</div>
</template>

<script lang="ts" setup>
const expanded = ref([]);
const search = ref("");
const headers = ref([
	{
		title: "Prompt",
		align: "start",
		key: "prompt",
	},
	{ title: "Author", sortable: false, key: "author" },
	{ title: "HomePage", sortable: false, align: "center",  key: "homepage" },
	{ title: "Publish", width: "120px", key: "publish" },
	{ title: "Preview", sortable: false, key: "video" },
]);

const { data } = await useFetch("/api/sora", { query: { search } });
</script>

<style></style>
