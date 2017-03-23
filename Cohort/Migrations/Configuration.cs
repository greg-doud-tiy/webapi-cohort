namespace Cohort.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
	using Cohort.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<Cohort.CohortContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Cohort.CohortContext context)
        {
			//  This method will be called after migrating to the latest version.

			
			context.Students.AddOrUpdate(
				new Student() { Name = "Austin" },
				new Student() { Name = "Bobby" },
				new Student() { Name = "Kristin" },
				new Student() { Name = "Michael A." },
				new Student() { Name = "Michael W." },
				new Student() { Name = "Nathan" },
				new Student() { Name = "Nick" }
			);

			//  You can use the DbSet<T>.AddOrUpdate() helper extension method 
			//  to avoid creating duplicate seed data. E.g.
			//
			//context.Students.AddOrUpdate(
			//  p => p.FullName,
			//  new Person { FullName = "Andrew Peters" },
			//  new Person { FullName = "Brice Lambson" },
			//  new Person { FullName = "Rowan Miller" }
			//);
			//
		}
    }
}
