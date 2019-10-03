const express = require('express')
const expressGraphQL = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } = require('graphql')
const app = express()


const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Tabla1',
		fields: () => ({
			message: {
				type: GraphQLString,
				resolve: () => 'Hello, World!'
			},
			number: {
				type: GraphQLFloat,
				resolve: () => 2_940_526.856
			}
		})
	})
})

app.use('/graphql', expressGraphQL({
	schema: schema,
	graphiql: true
}))
app.listen(5000., () => console.log("Server Running"))