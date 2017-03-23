using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace Cohort.Controllers {
	public class ReturnResult {
		public int Code;
		public string Message;
	}
	public class ValuesController : ApiController {
		// GET api/values
		public IHttpActionResult Get() {
			return Json(new ReturnResult() { Code = 0, Message = "Success!" });
		}

		// GET api/values/5
		public string Get(int id) {
			return "value";
		}

		// POST api/values
		public void Post([FromBody]string value) {
		}

		// PUT api/values/5
		public void Put(int id, [FromBody]string value) {
		}

		// DELETE api/values/5
		public void Delete(int id) {
		}
	}
}
