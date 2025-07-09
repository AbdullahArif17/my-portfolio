export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
	  {
		name: "title",
		title: "Title",
		type: "string",
		validation: (Rule: any) => Rule.required(),
	  },
	  {
		name: "description",
		title: "Description",
		type: "text",
		validation: (Rule: any) => Rule.required().max(200),
	  },
	  {
		name: "image",
		title: "Project Image",
		type: "image",
		options: {
		  hotspot: true,
		},
		validation: (Rule: any) => Rule.required(),
	  },
	  {
		name: "technologies",
		title: "Technologies",
		type: "array",
		of: [{ type: "string" }],
		validation: (Rule: any) => Rule.required().min(1),
	  },
	  {
		name: "liveUrl",
		title: "Live URL",
		type: "url",
	  },
	  {
		name: "githubUrl",
		title: "GitHub URL",
		type: "url",
	  },
	  {
		name: "featured",
		title: "Featured Project",
		type: "boolean",
		initialValue: false,
	  },
	  {
		name: "order",
		title: "Display Order",
		type: "number",
		initialValue: 0,
	  },
	],
	preview: {
	  select: {
		title: "title",
		media: "image",
		subtitle: "description",
	  },
	},
  }
  