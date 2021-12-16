const path = require(`path`)
const languages = [
	{
		path: "/",
		code: "ru_RU",
		language: "ru_RU"

	},
	{
		path: "/en",
		code: "en_US",
		language: "en_US"

	},

]
exports.createPages = async ({ actions: { createPage } }) => {
	const HomepageTemplate = path.resolve("./src/pages/index.js")


	languages.forEach(lang => {
	createPage({
			path: lang.path,
			component: HomepageTemplate,
			context: {
				lang: lang.code,
				language: lang.language
			},
		});
	})
}

