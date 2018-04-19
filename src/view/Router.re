open PrimitiveTypes;

module Config = {
  type route =
    | Home
    | Venture(ventureId)
    | JoinVenture(ventureId, userId)
    | CreateVenture
    | TypographyStack;
  let routeFromUrl = (url: ReasonReact.Router.url) =>
    switch (url.path) {
    | ["ventures", "new"] => CreateVenture
    | ["ventures", id] => Venture(id |> VentureId.fromString)
    | ["ventures", id, "joinvia", userId] =>
      JoinVenture(id |> VentureId.fromString, userId |> UserId.fromString)
    | ["typographystack"] => TypographyStack
    | [] => Home
    | _ => Home
    };
  let routeToUrl = (route: route) =>
    switch (route) {
    | CreateVenture => "/ventures/new"
    | Venture(id) => "/ventures/" ++ (id |> VentureId.toString)
    | JoinVenture(id, userId) =>
      "/ventures/"
      ++ (id |> VentureId.toString)
      ++ "/joinvia/"
      ++ (userId |> UserId.toString)
    | TypographyStack => "/typographystack"
    | Home => "/"
    };
};

include ReRoute.CreateRouter(Config);
