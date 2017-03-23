using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using Cohort.Models;

namespace Cohort {
	public class CohortContext : DbContext {

		public DbSet<Student> Students { get; set; }

		public CohortContext() 
			: base("CohortDbConnectionString") { }

	}
}