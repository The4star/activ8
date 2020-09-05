using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Activities
{
  public class Create
  {
    public class Command : IRequest<Activity>
    {
      public Guid Id { get; set; }
      public string Title { get; set; }
      public string Description { get; set; }
      public string Category { get; set; }
      public DateTime Date { get; set; }
      public string City { get; set; }
      public string Venue { get; set; }
    }

    public class Handler : IRequestHandler<Command, Activity>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;
      }

      public async Task<Activity> Handle(Command request, CancellationToken cancellationToken)
      {
          Activity activity = new Activity
          {
            Id = request.Id,
            Title = request.Title,
            Description = request.Description,
            Category = request.Category,
            Date = request.Date,
            City = request.City,
            Venue = request.Venue

          };

          _context.Activities.Add(activity);
          bool success = await _context.SaveChangesAsync() > 0;
          
          if(success) 
          {
              System.Console.WriteLine($"Created Activity {activity.Title}");
              return activity;
          }
          throw new Exception("Problem saving changes");
      }
    }
  }
}